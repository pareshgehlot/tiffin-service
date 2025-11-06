const weeklyMenu = [
  { day: 'Monday', category: 'Veg', items: ['Spinach Corn Paneer', 'Masala Quinoa', 'Carrot Halwa'] },
  { day: 'Tuesday', category: 'Vegan', items: ['Tofu Tikka Masala', 'Brown Rice', 'Coconut Ladoo'] },
  { day: 'Wednesday', category: 'Non-Veg', items: ['Tandoori Chicken Bowl', 'Jeera Rice', 'Kheer'] },
  { day: 'Thursday', category: 'Diet', items: ['Grilled Fish', 'Zoodles', 'Chia Pudding'] },
  { day: 'Friday', category: 'Jain', items: ['Sabudana Khichdi', 'Methi Thepla', 'Shrikhand'] }
];

export default function MenuPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl font-semibold">Weekly Menu</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">
        Explore chef-curated dishes for every day of the week. Filter by dietary preferences and plan your meals ahead.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {weeklyMenu.map((menu) => (
          <div key={menu.day} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">{menu.day}</h2>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{menu.category}</span>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              {menu.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
