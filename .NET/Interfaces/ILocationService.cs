﻿using Carte.Models;
using Carte.Models.Domain;
using Carte.Models.Requests;
using System.Collections.Generic;

namespace Carte.Services
{
    public interface ILocationService
    {
        int Add(LocationAddRequest model,int userId);
        void Update(LocationUpdateRequest model,int userId);
        void Delete(int id);
        List<Location> Get(int userId);
    }
}
