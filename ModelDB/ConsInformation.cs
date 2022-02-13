using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace ModelDB
{
    public class ConsInformation
    {
        public int Id { get; set; }
        public int ConsumerId { get; set; }
        public Consumer? Consumer { get; set; }

        public int ElMetersId { get; set; }

        public ElMeters? ElMeters{ get; set; } 
        

    }
}
