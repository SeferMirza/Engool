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
    public virtual string EngText { get; protected set; } = default!;
    public virtual string TrText { get; protected set; } = default!;
    public virtual bool IsDeleted { get; protected set; } = default!;

    public virtual Word With(string engText, string trText)
    {
        if(_words.GetWord(engText, trText) is not null) { return this; }

        Set(engText, trText, isDeleted: false);

        return _context.Insert(this);
    }

    public virtual async Task Update(string engText, string trText) =>
        Set(engText, trText, IsDeleted);

    protected virtual void Set(string engText, string trText, bool isDeleted)
    {
        EngText = engText;
        TrText = trText;
        IsDeleted = isDeleted;
    }

    public virtual void ForceDelete() => _context.Delete(this);
    public virtual void Delete() =>
        Set(
            engText: EngText,
            trText: TrText,
            isDeleted: true
        );
}

public class Words
{
    readonly IQueryContext<Word> _context;

    public Words(IQueryContext<Word> context) =>
        _context = context;

    public Word? GetWord(string eng, string tr) =>
        _context.SingleBy(w =>
            w.IsDeleted == false &&
            w.EngText == eng &&
            w.TrText == tr
        );
    public Word GetWordById(Guid id) => _context.All(w => w.IsDeleted == false && w.Id == id).FirstOrDefault();
    public Word GetWord() => _context.All(w => w.IsDeleted == false).FirstOrDefault();
    public List<Word> GetWords(int? take = default, int? skip = default) => _context.All(w => w.IsDeleted == false, take: take, skip: skip);
}
