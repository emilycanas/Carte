using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Carte.Models.Requests
{
    public class LocationUpdateRequest : LocationAddRequest, IModelIdentifier
    {
        [Required]
        public int Id { get; set; }
    }
}
