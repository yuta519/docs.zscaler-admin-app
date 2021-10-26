import NormalLists from '@/components/Atoms/NormalLists';

export default function Likes() {
    const title: string = "心がけていること / 興味"
    const lines: { emoji: string; description: string }[] = [
        {
            emoji: "computer",
            description: "バックエンド技術が好き - 特に Python / FastAPI / Django / Go あたり"
        },
        {
            emoji: "busts_in_silhouette",
            description: "コミュニケーション - ソフトウェア開発はチームプレーが大切と心がけています"
        },
        {
            emoji: "sparkles",
            description: "クリーンアーキテクチャ - 他の人が読みやすく理解しやすいコードを書きたいです"
        },
    ]

    return (
        <NormalLists title={title} lines={lines} />
    )

}

