import styled from 'styled-components'

export const ContainerGroup = styled.div`
	.business-name {
		max-width: ${({ category }) => (category === 'Matriz' ? '292px' : '252px')};
		transform: ${({ x, y }) => (x && y`translate(${x}px, ${y}px)`) ?? null};
		transition: 'transform 0.3s';
	}
`

export const Icon = styled.div`
	cursor: pointer;
`

export const BuusinessItem = styled.div`
	padding: 10px 15px;
	border: 2px solid #dfdfdf;
	border-radius: 50px;
	max-width: 500px;
	min-width: 400px;
	display: flex;
`
