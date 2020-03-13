import useStats from '../utils/useStats';

export default function Stats() {
	const stats = useStats('https://covid19.mathdro.id/api');
	if (!stats) return <p>Loading...</p>
	console.log('stats:', stats)
	return (
		<div>
			<div className="statBlocK">
				<h3>Confirmed:</h3>
				<span>{stats.confirmed.value}</span>
			</div>
			<div className="statBlocK">
				<h3>Deaths:</h3>
				<span>{stats.deaths.value}</span>
			</div>
			<div className="statBlocK">
				<h3>Recovered:</h3>
				<span>{stats.recovered.value}</span>
			</div>
		</div>
	)
}
