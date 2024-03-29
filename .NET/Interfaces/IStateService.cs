﻿using Carte.Models.Domain;
using System.Collections.Generic;

namespace Carte.Services
{
    public interface IStateService
    {
        List<State> GetAllStates();
        List<BaseState> GetAllStateCodes();
    }
}
