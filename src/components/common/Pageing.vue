<template>
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="page"
        :page-sizes="[5, 10, 20, 50, 100]" :page-size="size" layout="total, sizes, prev, pager, next, jumper"
        :total="total" :url="url">
    </el-pagination>
</template>

<script>
import { getTableData } from "@/utils/table"
export default {
    name:"PageName",
    props: {
        "total": Number,
        "url": String
    },
    data() {
        return {
            page: 1,
            size: 10,
        }
    }, mounted() {
        getTableData(this.$parents, "/works", { page: this.page, size: this.size }, ["completed"]);
    },
    methods: {
        handleSizeChange(val) {
            this.size = val
            this.page = 1

            getTableData(this.$parents, "/works", { page: this.page, size: val }, ["completed"]);

        },
        handleCurrentChange(val) {
            this.page = val

            getTableData(this.$parents, "/works", { page: val, size: this.size }, ["completed"]);
        },
    }
}
</script>

<style>
</style>