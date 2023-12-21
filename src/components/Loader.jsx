import { Html } from '@react-three/drei';

const Loader = () => {
  return (
	<Html>
		<div className="flex justify-center items-center">
			<div classname="w-20 h-20 border-2 border-opacity-20 border-blue-500 border-blue-t-blue-500 rounded-full animate-spin" />
		</div>
	</Html>	
  )
}

export default Loader