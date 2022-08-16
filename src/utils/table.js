// import { Tooltip } from "element-ui"

export function getTableData(root, url, params, arr) {
    root.service.get(url, { params: params || {} }).then(res => {
        if (res.data.status === 200) {
            root.tableData = res.data.data
            root.total = res.data.total
            root.tableData.map(item => {
                arr.map(aItem =>[item[aItem]?item[aItem+'_text']='是':item[aItem+'_text']='否'])
            })
            root.loading=false
        }
    })
        .catch(err => {
        throw err
    })
}