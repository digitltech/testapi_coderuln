

namespace ModelDB
{
    public class Consumer

    {
        public int Id { get; set; }
        public string Name { get; set; } = String.Empty;
        public string? Phone { get;set; } = String.Empty;
        public int adresId { get; set; }
        public Adres? Adres { get; set; }
        public string AdresFull { get; set; }=String.Empty;


    }

    public class Adres
    {
        public int Id { get; set; }
        public string City { get; set; } = String.Empty ;
        public string Street { get; set; } = String.Empty;
        public int NumApartment { get; set; }
    }

}