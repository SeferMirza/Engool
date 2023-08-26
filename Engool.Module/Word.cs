using Do.Orm;

namespace Engool.Module;

public class Word
{
    readonly IEntityContext<Word> _context = default!;

    protected Word() { }
    public Word(IEntityContext<Word> context) =>
        (_context) = (context);

    public virtual Guid Id { get; protected set; } = default!;
    public virtual string EngSentence { get; protected set; } = default!;
    public virtual string EngText { get; protected set; } = default!;
    public virtual string TrSentence { get; protected set; } = default!;
    public virtual string TrText { get; protected set; } = default!;

    public virtual Word With(string engText, string trText, string engSentence, string trSentence)
    {
        Set(engText, trText, engSentence, trSentence);

        return _context.Insert(this);
    }

    public virtual async Task Update(string engText, string trText, string engSentence, string trSentence) => 
        Set(engText, trText, engSentence, trSentence);

    protected virtual void Set(string engText, string trText, string engSentence, string trSentence)
    {
        EngText = engText;
        TrText = trText;
        EngSentence = engSentence;
        TrSentence = trSentence;
    }

    public virtual void Delete() => _context.Delete(this);
}

public class Words
{
    readonly IQueryContext<Word> _context;

    public Words(IQueryContext<Word> context) =>
        _context = context;

    public Word GetWord() => _context.All().FirstOrDefault();
    public List<Word> GetWords() => _context.All();
}
