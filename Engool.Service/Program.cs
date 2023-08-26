using Engool;

Forge.New
    .Service(
        business: c => c.BusinessModule(),
        database: c => c.MySql(),
        configure: c =>
        {
            c.Features.AddConfigurationOverrider();
        }
    )
    .Run();