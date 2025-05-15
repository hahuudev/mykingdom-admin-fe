import { Popover, PopoverContent } from '@/components/ui/popover';
import type { ITableColumn } from '@/components/ui/table';
import { HStack } from '@/components/utilities';
import { PopoverTrigger } from '@radix-ui/react-popover';
import { DotSquare } from 'lucide-react';
import Image from 'next/image';
import ButtonDeleteProduct from '../components/ButtonDeleteProduct';

export const COLUMNS = (refetch: any): ITableColumn[] => [
  { title: 'ID', key: '_id', align: 'left', className: 'w-[250px]' },
  {
    title: 'Name',
    key: 'name',
    align: 'left',
    className: 'w-[250px]',
  },
  {
    title: 'Description',
    key: 'description',
    align: 'left',
    getCell: ({ row }) => (
      <div
        className="line-clamp-3 min-h-4 w-full px-2 py-1 font-medium text-[13px] text-grey-600"
        dangerouslySetInnerHTML={{ __html: row.description }}
      />
    ),
  },
  {
    title: 'Image',
    key: 'updated_by',
    align: 'center',
    getCell: ({ row }) => (
      <HStack pos="center">
        <Image src={row?.images?.[0] || '/images/no-image.svg'} alt="image" width={80} height={80} className="rounded" />
      </HStack>
    ),
  },
  {
    title: 'Total Sold Count',
    key: 'totalSoldCount',
    align: 'center',
  },
  {
    title: 'View Count',
    key: 'viewCount',
    align: 'center',
  },
  {
    title: 'Created At',
    key: 'createdAt',
    align: 'left',
  },
  {
    title: 'Action',
    key: 'action',
    align: 'center',
    className: 'w-[200px]',
    getCell: ({ row }) => (
      <HStack pos="center" noWrap spacing={20}>
        <ButtonDeleteProduct {...row} refetch={refetch} />
        <Popover>
          <PopoverTrigger asChild>
            <DotSquare />
          </PopoverTrigger>

          <PopoverContent>
            <div className="flex flex-col gap-2">
              <button>Detail</button>
              <button>Edit</button>
            </div>
          </PopoverContent>
        </Popover>
      </HStack>
    ),
  },
];
