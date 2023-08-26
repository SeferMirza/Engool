using Do.Architecture;

namespace Engool.ConfigurationOverrider;

public class ConfigurationOverriderFeature : IFeature
{
    public void Configure(LayerConfigurator configurator)
    {
        configurator.ConfigureAutomapping(mapping =>
        {
            mapping.MemberIsId.Clear();
            mapping.MemberIsId.Add(m => m.PropertyType == typeof(Guid) && m.Name == "Id");
        });
    }
}
