const OfficialResources = () => {
  return (
		<section>
		  <h2 className='h1 text-center max-w-xl mx-auto'>
			  We use only official trusted resources
			</h2>
			<div className='grid md:grid-cols-2'>
				<div className='flex items-center justify-center rounded-full bg-gray-200'>
					<div className="text-center absolute w-280px max-w-full">
						<h3 className='text-blue-ua'>
							Donations 💸
						</h3>
						<p className='mt-2'>
							are made to help Ukraine in the war with Russia, via Monobank, which is the largest Ukrainian neo-bank with 5.5M customers.
						</p>
					</div>
				</div>
				<div className='flex items-center justify-center rounded-full bg-yellow-200 relative before:block before:pt-100%'>
					<div className="text-center absolute w-280px max-w-full">
						<h3 className='text-blue-ua'>
							Support Ukraine ❤
						</h3>
						<p className='mt-2'>
							is the official website of Ukraine. The information is verified by the Ministry of Foreign Affairs of Ukraine
						</p>
					</div>
				</div>
			</div>
    </section>
  )
}

export default OfficialResources
