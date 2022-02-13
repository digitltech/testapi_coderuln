using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using System.Data;


namespace TestApp.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class ConsumerController : ControllerBase
    {

        private readonly ApprContext _db;
        //private readonly IConfiguration _configuration;

        //public ConsumerController(IConfiguration configuration) =>_configuration = configuration;


        public ConsumerController(ApprContext db) =>_db = db;
 

        [HttpGet]
        public JsonResult Get()

        {
            //string query = @"
            //                select * from dbo.ConsInformations";
            //DataTable table = new();
            //string sql = _configuration.GetConnectionString("DBConnection");
            //SqlDataReader dataReader;
            //using (SqlConnection sqlConnection = new SqlConnection(sql))
            //{
            //    sqlConnection.Open();
            //    using (SqlCommand cmd = new(query, sqlConnection))
            //    {
            //        dataReader = cmd.ExecuteReader();
            //        table.Load(dataReader); ;
            //        dataReader.Close();
            //        cmd.Clone();
            //    }
            //}
            var table = _db.Consumers.Include(x => x.Adres).ToList();
            return new JsonResult(table);
        }
  
     
        [HttpPost]
       public JsonResult  AddConsumer (Consumer consumer)
        {
            _db.Consumers.Add(consumer);
            _db.SaveChanges();
            return new JsonResult("Информация добавленв");
        }


        [HttpPut]
        public JsonResult Edit(Consumer consumer)
        {
            _db.Consumers.Update(consumer);
            _db.SaveChanges();
            return new JsonResult("Информация обновлена");
        }

        [HttpDelete("{id}")]
        public JsonResult Del (int id)
        {
            var info = _db.Consumers.FirstOrDefault(x=>x.Id==id);

            if (info == null) return new JsonResult("не найдено");

            _db.Consumers.Remove(info);

            _db.SaveChanges();

            return new JsonResult("Информация удаленв");
        }

     
    }
}
