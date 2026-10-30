interface EmojiCardProps {
  emoji: string;
  title: string;
  keywords: string;
}

export function EmojiCard({ emoji, title, keywords }: EmojiCardProps) {
  return (
    <div className="emoji-card">
      <img src={emoji} alt={title} className="emoji-icon" />
      <h2 className="emoji-title">{title}</h2>
      <p className="emoji-keywords">{keywords}</p>
    </div>
  );
}
