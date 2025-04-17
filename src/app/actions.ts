'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

export async function addItem(formData: {
  title: string;
  img_link: string;
  category: string;
  release_date: string;
  description: string;
}) {
  const supabase = await createClient()
  
  const { data, error } = await supabase
    .from('items_list')
    .insert([formData])
    .select()
  
  if (error) {
    console.error('Error inserting data:', error)
    return { success: false, error: error.message }
  }
  
  // Revalidate the pages that display items
  revalidatePath('/')
  revalidatePath('/films')
  revalidatePath('/series')
  
  return { success: true, data }
}

export async function deleteItem(id: string) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('items_list')
    .delete()
    .select()

  if (error) {
    console.error('Error deleting data:', error)
    return { success: false, error: error.message }
  }

  // Revalidate the pages that display items
  revalidatePath('/')
  revalidatePath('/films')
  revalidatePath('/series')

  return { success: true, data }
}

export async function getItems(type: string) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('items_list')
    .select()
    .eq('category', type)

  if (error) {
    console.error('Error fetching data:', error)
    return { success: false, error: error.message }
  }

  return { success: true, data }
}
