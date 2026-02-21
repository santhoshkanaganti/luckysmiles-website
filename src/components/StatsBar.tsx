const stats = [
  { num: '15+', label: 'Years of Care' },
  { num: '5k+', label: 'Happy Patients' },
  { num: '12',  label: 'Services Offered' },
  { num: '5★',  label: 'Patient Rating' },
]

export default function StatsBar() {
  return (
    <div className="bg-navy flex flex-wrap justify-center divide-x divide-white/10">
      {stats.map((s) => (
        <div key={s.label} className="text-center px-10 py-7">
          <div className="font-serif text-4xl font-bold text-gold">{s.num}</div>
          <div className="text-xs text-white/60 tracking-widest uppercase mt-1">{s.label}</div>
        </div>
      ))}
    </div>
  )
}
