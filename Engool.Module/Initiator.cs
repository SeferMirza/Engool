﻿using System.Text.Json;

namespace Engool.Module;

public class Initiator
{
    readonly Func<Word> _newWord;
    private readonly Func<Sentence> _sentence;

    public Initiator(Func<Word> word, Func<Sentence> sentence)
    {
        _newWord = word;
        _sentence = sentence;
    }

    protected record JsonData(string Eng, string Tr);

    public void InitializeWords(int? take = null)
    {
        var pureJson = File.ReadAllText("InitialWords.json");

        List<JsonData> listWords = JsonSerializer.Deserialize<List<JsonData>>(pureJson);
        listWords = take is null ? listWords : listWords.Take((int)take).ToList();

        foreach (var jsonWordData in listWords)
        {
            _newWord().With(jsonWordData.Eng, jsonWordData.Tr);
        }
    }

    public void InitializeSentences(int? take = null)
    {
        var pureJson = File.ReadAllText("InitialSentences.json");

        List<JsonData> listSentences = JsonSerializer.Deserialize<List<JsonData>>(pureJson);
        listSentences = take is null ? listSentences : listSentences.Take((int)take).ToList();

        foreach (var jsonSentenceData in listSentences)
        {
            _sentence().With(jsonSentenceData.Eng, jsonSentenceData.Tr);
        }
    }
}
