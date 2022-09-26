using Carte.Data;
using Carte.Data.Providers;
using Carte.Models;
using Carte.Models.Domain;
using Carte.Models.Requests;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Carte.Services
{
    public class LocationService : ILocationService
    {
        IDataProvider _data = null;
        public LocationService(IDataProvider data)
        {
            _data = data;
        }

        public List<Location> Get(int userId)
        {
           
            List<Location> list = null;

            string procName = "[dbo].[Locations_Select_ByCreatedByV2]";

            _data.ExecuteCmd(procName, (param) =>
            {
                param.AddWithValue("@CreatedBy", userId);

            },
            (reader, recordSetIndex) =>
            {
                int startingIndex = 0;
                Location location = MapLocation(reader, ref startingIndex);

                if (list == null)
                {
                    list = new List<Location>();
                }
                list.Add(location);
            }
            );
            return list;
        }

        public int Add(LocationAddRequest model, int userId)
        {
            int id = 0;

            string procName = "[dbo].[Locations_Insert]";

            _data.ExecuteNonQuery(procName,
                inputParamMapper: delegate (SqlParameterCollection col)
                {
                    AddCommonParams(model, col);
                    col.AddWithValue("@CreatedBy", userId);
                    col.AddWithValue("@ModifiedBy", userId);

                    SqlParameter idOut = new SqlParameter("@Id", SqlDbType.Int);
                    idOut.Direction = ParameterDirection.Output;

                    col.Add(idOut);
                }, returnParameters: delegate (SqlParameterCollection returnCollction)
                {
                    object oId = returnCollction["@Id"].Value;
                    int.TryParse(oId.ToString(), out id);

                });
            return id;
        }

        public void Update(LocationUpdateRequest model, int userId)
        {
            string procName = "[dbo].[Locations_Update]";


            _data.ExecuteNonQuery(procName,
                inputParamMapper: delegate (SqlParameterCollection col)
                {
                    AddCommonParams(model, col);
                    col.AddWithValue("@ModifiedBy", userId);
                    col.AddWithValue("@Id", model.Id);
                    
                }, returnParameters: null);
        }

        public void Delete(int id)
        {
            string procName = "[dbo].[Locations_Delete_ById]";

            _data.ExecuteNonQuery(procName, delegate (SqlParameterCollection paramCollection)
            {
                paramCollection.AddWithValue("@Id", id);
            }, returnParameters: null
            );
        }

        private static void AddCommonParams(LocationAddRequest model, SqlParameterCollection col)
        {
            col.AddWithValue("@LocationTypeId", model.LocationTypeId);
            col.AddWithValue("@LineOne", model.LineOne);
            col.AddWithValue("@LineTwo", model.LineTwo);
            col.AddWithValue("@City", model.City);
            col.AddWithValue("@Zip", model.Zip);
            col.AddWithValue("@StateId", model.StateId);
            col.AddWithValue("@Latitude", model.Latitude);
            col.AddWithValue("@Longitude", model.Longitude);
        }

        private static Location MapLocation(IDataReader reader, ref int startingIndex)
        {
            Location location = new Location();
            location.LocationType = new LookUp();
            location.State = new State();

            location.Id = reader.GetSafeInt32(startingIndex++);
            location.LocationType.Id = reader.GetSafeInt32(startingIndex++);
            location.LocationType.Name = reader.GetSafeString(startingIndex++);
            location.LineOne = reader.GetSafeString(startingIndex++);
            location.LineTwo = reader.GetSafeString(startingIndex++);
            location.City = reader.GetSafeString(startingIndex++);
            location.Zip = reader.GetSafeString(startingIndex++);
            location.State.Id = reader.GetSafeInt32(startingIndex++);
            location.State.Name = reader.GetSafeString(startingIndex++);
            location.State.Code = reader.GetSafeString(startingIndex++);
            location.Latitude = reader.GetSafeDouble(startingIndex++);
            location.Longitude = reader.GetSafeDouble(startingIndex++);

            return location;

        }
    }
}
