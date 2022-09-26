using Carte.Data;
using Carte.Data.Providers;
using Carte.Models.Domain;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Carte.Services
{
    public class StateService : IStateService
    {
        IDataProvider _data = null;
        public StateService(IDataProvider data)
        {
            _data = data;
        }

        public List<State> GetAllStates()
        {
            List<State> statesList = null;
            string procName = "[dbo].[States_SelectAll]";

            _data.ExecuteCmd(procName, inputParamMapper: null
                , singleRecordMapper: delegate (IDataReader reader, short set)
                {
                    int startingIndex = 0;

                    State state = MapSingleState(reader, ref startingIndex);
                    state.Name = reader.GetSafeString(startingIndex++);

                    if (statesList == null)
                    { statesList = new List<State>(); }
                    statesList.Add(state);
                }
            );
            return statesList;
        }

        public List<BaseState> GetAllStateCodes()
        {
            List<BaseState> statesList = null;
            string procName = "[dbo].[StateCodes_SelectAll]";

            _data.ExecuteCmd(procName, inputParamMapper: null
                , singleRecordMapper: delegate (IDataReader reader, short set)
                {
                    int startingIndex = 0;

                    BaseState currentState = MapSingleState(reader, ref startingIndex);

                    if (statesList == null)
                    { statesList = new List<BaseState>(); }
                    statesList.Add(currentState);
                }
            );
            return statesList;
        }

        private static State MapSingleState(IDataReader reader, ref int startingIndex)
        {
            State state = new State();

            state.Id = reader.GetSafeInt32(startingIndex++);
            state.Code = reader.GetSafeString(startingIndex++);
           
            return state;
        }
    }
}
