using Do.Orm;

namespace Engool.Module;

public class Word
{
    Words _words;
    IEntityContext<Word> _context = default!;

    protected Word() { }
    public Word(IEntityContext<Word> context, Words words)
    {
        _context = context;
        _words = words;
    }

    public virtual Guid Id { get; protected set; } = default!;
    public virtual string EngSentence { get; protected set; } = default!;
    public virtual string EngText { get; protected set; } = default!;
    public virtual string TrSentence { get; protected set; } = default!;
    public virtual string TrText { get; protected set; } = default!;
    public virtual bool IsDeleted { get; protected set; } = default!;

    public virtual Word With(string engText, string trText, string engSentence, string trSentence)
    {
        if(_words.GetWord(engText, trText, engSentence, trSentence) is not null) { return this; }

        Set(engText, trText, engSentence, trSentence, isDeleted: false);

        return _context.Insert(this);
    }

    public virtual async Task Update(string engText, string trText, string engSentence, string trSentence) =>
        Set(engText, trText, engSentence, trSentence, IsDeleted);

    protected virtual void Set(string engText, string trText, string engSentence, string trSentence, bool isDeleted)
    {
        EngText = engText;
        TrText = trText;
        EngSentence = engSentence;
        TrSentence = trSentence;
        IsDeleted = isDeleted;
    }

    public virtual void ForceDelete() => _context.Delete(this);
    public virtual void Delete() =>
        Set(
            engText: EngText,
            trText: TrText,
            engSentence: EngSentence,
            trSentence: TrSentence,
            isDeleted: true
        );
}

public class Words
{
    readonly IQueryContext<Word> _context;

    public Words(IQueryContext<Word> context) =>
        _context = context;

    public Word? GetWord(string eng, string tr, string engSentence, string trSentence) =>
        _context.SingleBy(w => 
            w.IsDeleted == false && 
            w.EngText == eng && 
            w.TrText == tr && 
            w.EngSentence == engSentence &&
            w.TrSentence == trSentence
        );
    public Word GetWordById(Guid id) => _context.All(w => w.IsDeleted == false && w.Id == id).FirstOrDefault();
    public Word GetWord() => _context.All(w => w.IsDeleted == false).FirstOrDefault();
    public List<Word> GetWords() => _context.All(w => w.IsDeleted == false);
}
