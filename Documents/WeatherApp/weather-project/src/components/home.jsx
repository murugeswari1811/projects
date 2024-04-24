

export default function Home(){
    return(
        <>
<div class="h-screen bg-gray-50 flex items-center">
	<section class="w-full h-full bg-[url('https://t3.ftcdn.net/jpg/05/79/86/10/360_F_579861052_KjeAAbyaXOBY6JjxMEPBVJypp2KSb59v.jpg')] bg-cover bg-center py-32 w-full" >
		<div class="container mx-auto text-left text-white">
			<div class="flex items-center">
				<div class="ml-8 w-1/2">
					<h1 class="text-5xl font-medium mb-6">Welcome to Weather App!!</h1>
					<p class="text-xl mb-12">Check Weather, Click Here!!</p>
					<a href="/weather" class="bg-indigo-500 text-white py-4 px-12 rounded-full hover:bg-indigo-600">Check Weather</a>
				</div>
				<div class="w-1/2 pl-16">
					<img src="https://wallpapers.com/images/hd/cloudy-weather-with-palm-tree-c4pzuybo1zlqcydt.jpg" class="h-64 w-full object-cover rounded-xl" alt="Layout Image"/>
      </div>
				</div>
			</div>
	</section>
</div>
        

    </>
    )
}