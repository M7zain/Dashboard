import React, { Suspense } from 'react'
import CustomersTable from '@/app/ui/customers/table';
import { Metadata } from 'next';
import { fetchFilteredCustomers } from '@/app/lib/data';
import { InvoicesTableSkeleton} from '@/app/ui/skeletons'
import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';

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
    
    <>
      <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
        Customers
      </h1>
      <Search placeholder="Search customers..." />
   
    <Suspense fallback={<InvoicesTableSkeleton/>}>
      <CustomersTable customers={customers}/>
    </Suspense>
    
    </>
 
  ); 
}

