const FloatingRating = ({ rating }) => (
  <div className="absolute -top-0 -left-0 bg-slate-100 text-slate-800 px-2 py-1 border bg-opacity-75 border-sky-500 z-50 rounded-br text-sm">
    <span>
      {rating}&nbsp;
      <span className="text-yellow-600">⭐</span>
    </span>
  </div>
);

export default FloatingRating;
