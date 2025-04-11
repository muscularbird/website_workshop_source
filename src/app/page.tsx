import { createClient } from '@/utils/supabase/server'

export default async function Page() {
  const supabase = await createClient()
  
let { data: items_list, error } = await supabase
.from('items_list')
.select()


  return <pre>{JSON.stringify(items_list, null, 2)}</pre>
}