using Sabio.Models;
using Sabio.Models.Domain;
using Sabio.Models.Requests;
using System.Collections.Generic;

namespace Sabio.Services
{
    public interface ILocationService
    {
        int Add(LocationAddRequest model,int userId);
        void Update(LocationUpdateRequest model,int userId);
        void Delete(int id);
        List<Location> Get(int userId);
    }
}