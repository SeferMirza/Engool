using Do.Orm;
using Microsoft.VisualBasic;
using System.Reflection;
using System.Text.Json;

namespace Engool.Module;

public class Initiator
{
    readonly Func<Word> _newWord;

    public Initiator(Func<Word> word)
    {
        _newWord = word;
    }

    protected record JsonData(string eng, string tr);

    public void InitializeWord()
    {
        var pureJson = File.ReadAllText("InitialWords.json");
        List<JsonData> listWords = JsonSerializer.Deserialize<List<JsonData>>(pureJson);

        foreach(var jsonWordData in listWords)
        {
            _newWord().With(jsonWordData.eng, jsonWordData.tr, "", "");
        }
    }
}
