using Do.Orm;

namespace Engool.Module;

public class Sentence
{
    readonly IEntityContext<Sentence> _context = default!;

    protected Sentence() { }
    public Sentence(IEntityContext<Sentence> context) =>
        (_context) = (context);

    public virtual Guid Id { get; protected set; } = default!;
    public virtual string EngText { get; protected set; } = default!;
    public virtual string TrText { get; protected set; } = default!;

    public virtual Sentence With(string engText, string trText)
    {
        Set(engText, trText);

        return _context.Insert(this);
    }

    public virtual async Task Update(string engText, string trText) => Set(engText, trText);

    protected virtual void Set(string engText, string trText)
    {
        EngText = engText;
        TrText = trText;
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
