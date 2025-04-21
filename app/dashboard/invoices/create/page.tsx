import Form from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';

// Force dynamic rendering - no static generation
export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
 
export default async function Page() {
  try {
    const customers = await fetchCustomers();
    
    return (
      <main>
        <Breadcrumbs
          breadcrumbs={[
            { label: 'Invoices', href: '/dashboard/invoices' },
            {
              label: 'Create Invoice',
              href: '/dashboard/invoices/create',
              active: true,
            },
          ]}
        />
        <Form customers={customers} />
      </main>
    );
  } catch (error) {
    console.error('Error loading customers:', error);
    return (
      <main>
        <Breadcrumbs
          breadcrumbs={[
            { label: 'Invoices', href: '/dashboard/invoices' },
            {
              label: 'Create Invoice',
              href: '/dashboard/invoices/create',
              active: true,
            },
          ]}
        />
        <div className="rounded-md bg-red-50 p-4 mt-4">
          <h3 className="text-red-800">Error loading customer data</h3>
          <p className="text-sm text-red-700 mt-2">Please try again later</p>
        </div>
      </main>
    );
  }
}