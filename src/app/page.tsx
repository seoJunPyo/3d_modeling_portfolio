import Link from 'next/link';

export default function Home() {
	return (
		<div>
			<div className="container mx-auto py-8 text-center ">
				<h2 className="text-4xl font-bold mb-4">
					3D 모델링 포트폴리오를 만들어 보세요!
				</h2>
				<p>
					간단하게 포트폴리오를 <b>제작/관리</b>하고 <b>공유</b>할 수 있습니다.
				</p>
				<p>
					<b>웹 3D 뷰어</b>를 지원하여 더 풍성한 포트폴리오를 만들 수 있습니다.
				</p>

				<div className="mt-4 flex justify-center items-center space-x-2">
					<Link
						href="/"
						className="py-2 px-3 flex items-center rounded-md bg-neutral-800 text-white hover:bg-neutral-700 transition-all">
						시작하기
					</Link>
					<Link
						href="/"
						className="py-2 px-3 flex items-center border border-neutral-800 rounded-md hover:border-neutral-400 hover:text-neutral-400 transition-all">
						GitHub
					</Link>
				</div>
			</div>
		</div>
	);
}
