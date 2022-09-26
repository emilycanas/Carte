using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Carte.Models.Requests
{
    public class LocationAddRequest
    {
        [Required]
        [Range(1, int.MaxValue)]
        public int LocationTypeId { get; set; }

        [Required]
        [StringLength(255, MinimumLength = 2)]
        public string LineOne { get; set; }
#nullable enable
        [StringLength(255)]
        public string? LineTwo { get; set; }
#nullable disable

        [Required]
        [StringLength(255, MinimumLength = 2)]
        public string City { get; set; }
#nullable enable
        [StringLength(50)]
        public string? Zip { get; set; }
#nullable disable

        [Required]
        [Range(1, int.MaxValue)]
        public int StateId { get; set; }
        
        [Required]
        [Range(-90.0000, 90.0000)]
        public float Latitude { get; set; }
        
        [Required]
        [Range(-180.0000, 180.0000)]
        public float Longitude { get; set; }
    }
}
