export let Pages = [
    {
        name: 'Dashboard',
        url: '/dashboard',
        icon: 'BsFillGrid1X2Fill',
        children: []
    },
    {
        name: 'Modules',
        icon: 'BsFillFileEarmarkFill',
        url: '/products',
        children: [
            {
                name: 'Products',
                icon: 'BsFillRecordFill',
                url: '/products'
            }
        ]
    }
]