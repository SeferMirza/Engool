using Do.Orm;

namespace Engool.Module;

public class Sentence
{
    readonly IEntityContext<Sentence> _context = default!;
    readonly Sentences _sentences;

    protected Sentence() { }
    public Sentence(IEntityContext<Sentence> context, Sentences sentences)
    {
        _context = context;
        _sentences = sentences;
    }

    public virtual Guid Id { get; protected set; } = default!;
    public virtual string EngText { get; protected set; } = default!;
    public virtual string TrText { get; protected set; } = default!;
    public virtual bool IsDeleted { get; protected set; } = default!;

    public virtual Sentence With(string engText, string trText)
    {
        if (_sentences.GetSentence(engText, trText) is not null) { return this; }

        Set(engText, trText, isDeleted: false);

        return _context.Insert(this);
    }

    public virtual async Task Update(string engText, string trText) => Set(engText, trText, IsDeleted);

    protected virtual void Set(string engText, string trText, bool isDeleted)
    {
        EngText = engText;
        TrText = trText;
        IsDeleted = isDeleted;
    }

    public virtual void ForceDelete() => _context.Delete(this);

    public virtual void Delete() => Set(EngText, TrText, true);
}

public class Sentences
{
    readonly IQueryContext<Sentence> _context;

    public Sentences(IQueryContext<Sentence> context) =>
        _context = context;

    public Sentence? GetSentence(string eng, string tr) => _context.SingleBy(s => s.EngText == eng && s.TrText == tr);
    public Sentence? GetSentence() => _context.All().FirstOrDefault();
    public Sentence? GetSentenceById(Guid id) => _context.SingleById(id);
    public List<Sentence> GetSentences() => _context.All();
}
