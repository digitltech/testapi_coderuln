using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModelDB
{
    public class ElMeters
    {
        public int id { get; set; }
        public int? typeMetersid { get; set; }
        public TypeMeters? typeMeters { get; set; }
        public string Number { get; set; } = String.Empty;  // номер счетчика

        public DateTime DateOfWork { get; set; } // дата приемки

        public DateTime CheckDate  { get; set; } //Дата поверки





    }

    public class TypeMeters
    {
        public int Id { get; set; }
        public string Name { get; set; }=String.Empty;
    }


    public class ListInformation
    {
        public int Id { get; set; }
        public int? ElMetersId { get; set; }
        public ElMeters? elMeters  { get; set; }

        public DateTime DateOfInformation { get; set; }
        public decimal Information { get; set; }
    }
}
