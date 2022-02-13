using Microsoft.EntityFrameworkCore;
using TestApp.Model;
using React.AspNet;
using JavaScriptEngineSwitcher.ChakraCore;
using JavaScriptEngineSwitcher.Extensions.MsDependencyInjection;
using Newtonsoft.Json.Serialization;

var builder = WebApplication.CreateBuilder();


string connect = builder.Configuration.GetConnectionString("DBConnection");
builder.Services.AddControllersWithViews();
builder.Services.AddDbContext<ApprContext>(options => options.UseSqlServer(connect));
builder.Services.AddMvc();
builder.Services.AddSwaggerGen();
builder.Services.AddReact();
builder.Services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
builder.Services.AddJsEngineSwitcher(options => options.DefaultEngineName = ChakraCoreJsEngine.EngineName).AddChakraCore();

builder.Services.AddControllersWithViews()
            .AddNewtonsoftJson(options =>
            options.SerializerSettings.ReferenceLoopHandling = Newtonsoft
            .Json.ReferenceLoopHandling.Ignore)
            .AddNewtonsoftJson(options => options.SerializerSettings.ContractResolver
            = new DefaultContractResolver());

builder.Services.AddCors(c =>
{
    c.AddPolicy("AllowOrigin", options => options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
});

var app = builder.Build();
app.UseRouting();
app.UseDefaultFiles();
app.UseStaticFiles();
app.UseReact(config => { });
app.UseCors(options => options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
//// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{

    app.UseSwagger();
    app.UseSwaggerUI();
}


app.MapControllers(); /*.MapGet("/", (ApprContext db) => db.Consumers.ToList());*/

app.Run();
