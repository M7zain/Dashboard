import React from 'react'
import CustomersTable from '@/app/ui/customers/table';
import { Metadata } from 'next';
import { fetchFilteredCustomers } from '@/app/lib/data';

export const metadata: Metadata = {
  title: 'customers',
};

export default async function(){
  const query = ''; 
  const customers = await fetchFilteredCustomers(query);
  return (
    <div>
      <CustomersTable customers={customers}/>
    </div>
  ); 
}

