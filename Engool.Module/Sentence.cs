using Do.Database;
using Do.Orm;

namespace Engool.Module;

public class Sentence
{
    readonly IEntityContext<Sentence> _context = default!;

    protected Sentence() { }
    public Sentence(IEntityContext<Sentence> context) =>
        (_context) = (context);

    public virtual Guid Id { get; protected set; } = default!;
    public virtual string SentenceText { get; protected set; } = default!;
    public virtual Lang Lang { get; protected set; } = default!;

    public virtual Sentence With(string sentenceText, Lang lang)
    {
        Set(sentenceText, lang);

        return _context.Insert(this);
    }

    public virtual async Task Update(string sentenceText, Lang lang) => Set(sentenceText, lang);

    protected virtual void Set(string sentenceText, Lang lang)
    {
        SentenceText = sentenceText;
        Lang = lang;
    }

    public virtual void Delete() => _context.Delete(this);
}

public class Sentencies
{
    readonly IQueryContext<Sentence> _context;

    public Sentencies(IQueryContext<Sentence> context) =>
        _context = context;

    public Sentence GetWord() => _context.All().First();
    public List<Sentence> GetWords() => _context.All();
}
