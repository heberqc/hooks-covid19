import useStats from '../utils/useStats';

export default function Stats({ url }) {
	const {stats, loading, error} = useStats(url);
	console.log(stats, loading, error);
	if (error) return <p>Error...</p>;
	if (loading) return <p>Loading...</p>;
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
