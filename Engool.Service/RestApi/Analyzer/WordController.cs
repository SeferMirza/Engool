// This file will be auto-generated

using Engool.Module;
using Microsoft.AspNetCore.Mvc;

namespace Engool.Controllers;

[ApiController]
public class WordController
{
    readonly IServiceProvider _serviceProvider;

    public WordController(IServiceProvider serviceProvider) =>
        _serviceProvider = serviceProvider;

    [HttpGet]
    [Route("words/single")]
    public Word GetWord()
    {
        var target = _serviceProvider.GetRequiredService<Words>();

        return target.GetWord();
    }

    [HttpGet]
    [Route("words/all")]
    public List<Word> GetWords([FromQuery] int take, [FromQuery] int skip)
    {
        var target = _serviceProvider.GetRequiredService<Words>();

        return target.GetWords(take: take, skip: skip);
    }


    [HttpGet]
    [Route("words/info")]
    public int Info()
    {
        var target = _serviceProvider.GetRequiredService<Words>();

        return target.GetWords().Count;
    }

    public record NewRequest(string EngText, string TrText);

    [HttpPost]
    [Route("words")]
    public Word New([FromBody] NewRequest request)
    {
        var target = _serviceProvider.GetRequiredService<Word>();

        return target.With(request.EngText, request.TrText);
    }

    [HttpDelete]
    [Route("words")]
    public void Delete(Guid id)
    {
        var target = _serviceProvider.GetRequiredService<Words>();

        target.GetWordById(id).Delete();
    }

    [HttpGet]
    [Route("words/initialize")]
    public void InitializeWord([FromQuery] int? take = null)
    {
        var target = _serviceProvider.GetRequiredService<Initiator>();

        target.InitializeWords(take);
    }
}
