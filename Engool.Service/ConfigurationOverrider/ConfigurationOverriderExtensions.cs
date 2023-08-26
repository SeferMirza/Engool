using Do.Architecture;
using Engool.ConfigurationOverrider;

namespace Engool;

public static class ConfigurationOverriderExtensions
{
    public static void AddConfigurationOverrider(this IList<IFeature> source) => source.Add(new ConfigurationOverriderFeature());
}
