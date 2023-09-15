// This file will be auto-generated

using Engool.Module;
using Microsoft.AspNetCore.Mvc;

namespace Engool.Controllers;

[ApiController]
public class SentenceController
{
    readonly IServiceProvider _serviceProvider;

    public SentenceController(IServiceProvider serviceProvider) =>
        _serviceProvider = serviceProvider;

    [HttpGet]
    [Route("sentences/single")]
    public Sentence GetSentence()
    {
        var target = _serviceProvider.GetRequiredService<Sentences>();

        return target.GetSentence();
    }

    [HttpGet]
    [Route("sentences/all")]
    public List<Sentence> GetSentences()
    {
        var target = _serviceProvider.GetRequiredService<Sentences>();

        return target.GetSentences();
    }

    public record NewRequest(string EngText, string TrText);

    [HttpPost]
    [Route("sentences")]
    public Sentence New([FromBody] NewRequest request)
    {
        var target = _serviceProvider.GetRequiredService<Sentence>();

        return target.With(request.EngText, request.TrText);
    }

    [HttpDelete]
    [Route("sentences")]
    public void Delete(Guid id)
    {
        var target = _serviceProvider.GetRequiredService<Sentences>();

        target.GetSentenceById(id).Delete();
    }

    [HttpGet]
    [Route("sentences/initialize")]
    public void InitializeSentence([FromQuery] int? take = null)
    {
        var target = _serviceProvider.GetRequiredService<Initiator>();

        target.InitializeSentences(take);
    }
}
