using Sabio.Models.Domain;
using System.Collections.Generic;

namespace Sabio.Services
{
    public interface IStateService
    {
        List<State> GetAllStates();
        List<BaseState> GetAllStateCodes();
    }
}