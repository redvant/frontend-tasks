import { expect, vi } from 'vitest'
import { render, screen, userEvent } from '../../utils/test-utils'
import DetailsModal from './DetailsModal'

describe('DetailsModal', () => {
  it('should render a details modal', () => {
    let modalData = {id:1,userId:1,title:"Test Post",body:"Test post body"}
    render(
      <DetailsModal
        isShowing={true}
        hide={()=>{}}
        modalData={modalData}
        deletePost={()=>{}}
      />
    )
    expect(screen.getByText(modalData.title)).toBeInTheDocument()
  })

  it('should not render any details modal', () => {
    let modalData = {id:1,userId:1,title:"Test Post",body:"Test post body"}
    render(
      <DetailsModal
        isShowing={false}
        hide={()=>{}}
        modalData={modalData}
        deletePost={()=>{}}
      />
    )
    expect(screen.queryByText(modalData.title)).toBeNull()
  })

  it('on Delete click, should call onDelete with modalData.id', async () => {
    let modalData = {id:1,userId:1,title:"Test Post",body:"Test post body"}
    const onDelete = vi.fn();
    render(
      <DetailsModal
        isShowing={true}
        hide={()=>{}}
        modalData={modalData}
        deletePost={onDelete}
      />
    )

    await userEvent.click(screen.getByText('Delete'))
    expect(onDelete).toBeCalledTimes(1)
    expect(onDelete).toBeCalledWith(modalData.id)
  })
 })