using Do.Business;
using Engool.Business;

namespace Engool;

public static class BusinessExtensions
{
    public static BusinessFeature BusinessModule(this BusinessConfigurator _) => new();
}
