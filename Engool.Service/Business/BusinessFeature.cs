using Do.Architecture;
using Engool.Module;
using Microsoft.VisualBasic;
using System.Reflection;

namespace Engool.Business;

public class BusinessFeature : IFeature
{
    public void Configure(LayerConfigurator configurator)
    {
        configurator.ConfigureServiceCollection(services =>
        {
            services.AddTransientWithFactory<Word>();
            services.AddTransientWithFactory<Initiator>();
            services.AddTransientWithFactory<Sentence>();
            services.AddSingleton<Words>();
            services.AddSingleton<Sentencies>();
        });

        configurator.ConfigureAutoPersistenceModel(model =>
        {
            model.AddEntityAssembly(typeof(Word).Assembly);
        });

        configurator.ConfigureApplicationParts(applicationParts =>
        {
            applicationParts.Add(new(Assembly.GetEntryAssembly() ?? throw new NotSupportedException("Entry assembly should not be null")));
        });

    }
}
