import { createClient } from '@/utils/supabase/server'
import Tile from '@/components/Tile'

export default async function Page() {
  const supabase = await createClient()
  
  let { data: items_list, error } = await supabase
    .from('items_list') 
    .select('*')
    .eq('category', 'serie')

  if (error) {
    console.error('Error fetching data:', error)
    return <div>Error loading films</div>
  }

  if (!items_list || items_list.length === 0) {
    return <div>No films found</div>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {items_list.map((item) => (
        <Tile key={item.id} film={item} />
      ))}
    </div>
  )
}