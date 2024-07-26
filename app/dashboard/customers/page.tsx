import React from 'react'
import CustomersTable from '@/app/ui/customers/table';
import { Metadata } from 'next';
import { fetchFilteredCustomers } from '@/app/lib/data';

export const metadata: Metadata = {
  title: 'customers',
};

export default async function customersPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}){
  
  const query = searchParams?.query || '' ;

  const customers = await fetchFilteredCustomers(query);
  return (
    <div>
      <CustomersTable customers={customers}/>
    </div>
  ); 
}

