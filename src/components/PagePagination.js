import { Pagination } from "react-bootstrap"

export default function PagePagination() {
    return(
        <Pagination className="my-4 text-align-center">
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{5}</Pagination.Item>
            <Pagination.Item active>{6}</Pagination.Item>
            <Pagination.Item>{7}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
        </Pagination>
    )
}