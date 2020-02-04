using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Academy.Lib.DAL;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using ProjecteAspNetAcademyFinal.App;

namespace ProjecteAspNetAcademyFinal
{
    public class Startup
    {

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            //services.AddControllers();
            services.AddControllersWithViews();

            var dbConnection = Configuration.GetConnectionString("AcademyDbConnection");
            services.AddDbContext<AcademyDbContext>(options => options.UseSqlServer(dbConnection, b => b.MigrationsAssembly("ProjecteAspNetAcademyFinal")));

            var bootstrapper = new Bootstrapper();
            bootstrapper.Init();


        }

        private static Func<AcademyDbContext> GetDbConstructor(string dbConnection)
        {
            var optionsBuilder = new DbContextOptionsBuilder<AcademyDbContext>();
            optionsBuilder.UseSqlServer(dbConnection, b => b.MigrationsAssembly("ProjecteAspNetAcademyFinal"));

            var dbContextConst = new Func<AcademyDbContext>(() =>
            {
                return new AcademyDbContext(optionsBuilder.Options);
            });
            return dbContextConst;
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            //else
            //{
            //    app.UseExceptionHandler("/Home/Error");
            //    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
            //    app.UseHsts();
            //}


            app.UseHttpsRedirection();

            app.UseDefaultFiles();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();


            });


        }




    }
}
